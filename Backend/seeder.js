import connectDB from './config/DB.js';
import OrderModel from './Model/orderModel.js';
import userModel from './Model/userModel.js';
import productModel from './Model/productModel.js';
import users from './Data/user.js';
import products from "./Data/products.js";

console.log("Seeder started");

await connectDB();


const importdata = async ()=>{
    try{
        await OrderModel.deleteMany();
        await productModel.deleteMany();
        await userModel.deleteMany();

        const createduser = await userModel.insertMany(users);
        const adminuser = createduser[0]._id;

        const sampleProducts = products.map((product)=>{
          return   {...product , user:adminuser}
        })

        await productModel.insertMany(sampleProducts);
        console.log('Data Imported');
        process.exit();
    }catch(err){
        console.log('catch error '+ err.message);
    }
}

const destroyData = async ()=>{
    try{
        await OrderModel.deleteMany();
        await productModel.deleteMany();
        await userModel.deleteMany();
        console.log('Data Destroyed');
        process.exit();
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData();
}else{
    importdata();
}