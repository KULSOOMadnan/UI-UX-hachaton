
import { type SchemaTypeDefinition } from 'sanity'
import {product} from './Products'
import {customer} from './customer'
import {order} from './orders'
import {user} from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , customer , order , user],
}
