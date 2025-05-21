import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const PgConfig: PostgresConnectionOptions = {
    url: 'postgresql://neondb_owner:npg_lHCP6dmW2RVh@ep-super-salad-a5fzz6uk-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    type: 'postgres',
    port: 3306,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}