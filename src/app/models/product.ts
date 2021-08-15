export class Product {
    
        id: number;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
       
        constructor(id:number, name:string, description = '', price = 0, imageUrl = 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png') {
          this.id = id
          this.name = name
          this.description = description
          this.price = price
          this.imageUrl = imageUrl
        }
      
}
