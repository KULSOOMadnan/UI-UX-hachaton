
import { type SchemaTypeDefinition } from 'sanity'
import {product} from './Products'
import customer from './customer'
import orders from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , customer , orders],
}
