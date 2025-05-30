import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as path from "path";
import { registerAs } from "@nestjs/config";

export default registerAs("dbconfig.dev",  ():PostgresConnectionOptions => ({
    url: process.env.URL,
    type: 'postgres',
    port: Number(process.env.DBPORT),
    entities: [path.resolve(__dirname, "..") + '/**/*.entity{.ts,.js}'],
    synchronize: true
}));