import { EntityRepository, Repository } from "typeorm";
import {
    Injectable
} from "@nestjs/common";
import { User } from "../models/User";
import { Address } from "../models/Address";

@Injectable()
@EntityRepository(Address)
export class AddressesRepository extends Repository<Address> {
}
