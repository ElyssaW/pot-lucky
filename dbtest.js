/* 

    Model create commands, for ease of editing and copy+paste

    sequelize model:create --name user --attributes name:string,email:string,password:string,user_type:string,locationId:integer,fills:integer,requests:integer,likes:integer

    sequelize model:create --name request --attributes userId:integer,title:text,locationId:integer,content:text,recipe:url,filled:integer

    sequelize model:create --name offer --attributes userId:integer,title:text,locationId:integer,content:text,recipe:url,claimed:integer

    sequelize model:create --name location --attributes country:string,state:string,city:string,street:string,address:string,zipcode:integer

    sequelize model:create --name userLocation --attributes userId:integer,locationId:integer

*/