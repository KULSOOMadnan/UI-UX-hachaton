import axios from "axios";

const SHIPENGINE_API_KEY = process.env.SHIPENGINE_TEST_API_KEY;

// POST request handler
export async function POST(req: Request) {
  try {
    console.log("Request method:", req.method);

    // Parse the request body
    const body = await req.json();
    console.log("Request body:", JSON.stringify(body));

    const { ship_from, ship_to, packages } = body;

    // Check if required fields are present
    if (!ship_from || !ship_to || !packages) {
      console.error("Missing required data: ship_from, ship_to, or packages");
      return new Response(JSON.stringify({ error: "Missing required data" }), {
        status: 400,
      });
    }

    console.log(
      "Request payload to ShipEngine:",
      JSON.stringify(
        {
          shipment: {
            ship_from,
            ship_to,
            packages,
            carrier_id: "se-217141",
            service_code: "ups_ground",
          },
        },
        null,
        2
      )
    );

    // Make the API call to ShipEngine to create the shipment
    const response = await axios.post(
      "https://api.shipengine.com/v1/shipments",
      {
        shipments: [
          {
            ship_from,
            ship_to,
            packages,
            carrier_id: "se-217142", // Example carrier ID
            service_code: "fedex_ground",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "API-Key": SHIPENGINE_API_KEY,
        },
      }
    );

    console.log("Raw ShipEngine response:", response.data);

    // Check if the response is empty
    if (!response.data || Object.keys(response.data).length === 0) {
      console.error("ShipEngine returned an empty response");
      return new Response(
        JSON.stringify({ error: "Empty response from ShipEngine" }),
        { status: 500 }
      );
    }

    // Check if shipment_id exists in the response
    const shipmentId = response.data.shipments[0]?.shipment_id;
    if (!shipmentId) {
      console.error("Failed to retrieve shipment_id from ShipEngine response.");
      return new Response(
        JSON.stringify({ error: "Failed to retrieve shipment_id" }),
        { status: 400 }
      );
    }


    console.log("Shipment Created, Shipment ID:", shipmentId);

    // Step 2: Fetch shipping rates using the shipment_id and carrier_ids
    const rateOptions = {
      shipment_id: shipmentId,
      rate_options: {
        carrier_ids: ["se-217142"],
        service_codes: ["fedex_ground"], // Add multiple service codes  "ups_2nd_day_air"
        package_types: ["package"], // Specify package type
        requested_delivery_date: "2025-01-20", // Desired delivery date
        shipping_amount: { currency: "USD", amount: 50.0 }, // Max shipping amount
        negotiated_rate: true, // Include negotiated rates if available
        rate_type: "shipment", // Request shipment rates
        packing_method: "auto", // Let ShipEngine auto-pack the items
        international_options: {
          include_duties: true, // Include duties for international shipments
          customs_declaration: "commercial_invoice", // Include customs declaration
        }, // Example carrier IDs, replace with your actual carrier IDs
      },
    };

    console.log("Fetching rates with the following options:", rateOptions);

    const fetchRatesResponse = await axios.post(
      "https://api.shipengine.com/v1/rates",
      rateOptions,
      {
        headers: {
          "Content-Type": "application/json",
          "API-Key": SHIPENGINE_API_KEY,
        },
      }
    );

    // Log the response from fetching shipping rates
    console.log("Shipping Rates Response:", fetchRatesResponse.data);

    // Check if rates are available
    if (
      !fetchRatesResponse.data ||
      !fetchRatesResponse.data.rate_response.rates
    ) {
      console.error("No rates available in the response.");
      return new Response(
        JSON.stringify({ error: "No rates available for the shipment" }),
        { status: 404 }
      );
    }

    // Log the available rates
    console.log(
      "Available Shipping Rates:",
      fetchRatesResponse.data.rate_response.rates
    );

    // Continue from where you fetch rates
    const selectedRate = fetchRatesResponse.data.rate_response.rates[0]; // Select the first available rate or let the user choose

    if (!selectedRate || !selectedRate.rate_id) {
      console.error("No valid rate_id available for label creation.");
      return new Response(
        JSON.stringify({
          error: "No valid rate_id available for label creation",
        }),
        { status: 400 }
      );
    }

    console.log("Selected Rate for Label:", selectedRate);

    // Step 3: Create the label
    const labelPayload = {
      shipment: {
        service_code: selectedRate.service_code,
        ship_from: ship_from,
        ship_to: ship_to,
        packages: packages,
      },

      carrier_ids: ["se-217142"],
      label_format: "pdf",
      label_download_type: "url",
    };

    console.log("Creating label with payload:", labelPayload);
    
  

    try {
      const createLabelResponse = await axios.post(
        "https://api.shipengine.com/v1/labels",
        labelPayload,
        {
          headers: {
            "Content-Type": "application/json",
            "API-Key": SHIPENGINE_API_KEY,
          },
        }
      );

      console.log("Label Creation Response:", createLabelResponse);

      // Return the label details to the client
      return new Response(JSON.stringify(createLabelResponse.data), {
        status: 200,
      });
    } catch (labelError) {
      console.error("Error creating label:", labelError);

      // const labelErrorMessage =
      //   labelError.response?.data ||
      //   labelError.message ||
      //   "Failed to create label";
      // console.error("Label error details:", labelErrorMessage);

      return new Response(
        JSON.stringify({
          error: { },
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error creating shipment:", error);

    // // Log the error details
    // const errorMessage =
    //   error.response?.data || error.message || "Failed to create shipment";
    // console.error("Error details:", errorMessage);

    // Check if the error is from ShipEngine
    if (error) {
      console.error("ShipEngine error response:", error);
    }

    return new Response(
      JSON.stringify({
        error: "Failed to create shipment",
      }),
      { status: 500 }
    );
  }
}
