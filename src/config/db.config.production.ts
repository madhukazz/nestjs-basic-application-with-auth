import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as path from "path";

export default ():PostgresConnectionOptions => ({
    url: process.env.URL,
    type: 'postgres',
    port: Number(process.env.DBPORT),
    entities: [path.resolve(__dirname, "..") + '/**/*.entity{.ts,.js}'],
    
    synchronize: false,
});