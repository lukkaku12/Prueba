import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName:'products',
    timestamps:false
})
export default class Product extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    product_name!:string;

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    price!:number

}