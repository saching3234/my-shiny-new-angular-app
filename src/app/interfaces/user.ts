export interface IUser{
    id: number;
    name:string ;
    username?:string;
    email: string;
    address?:IAddress 
    phone?: String;
    website?: String;
    company?: ICompany;
    }


interface ICompany{
    name: String;
    catchPhrase: String;
    bs: String;
    }

  interface IAddress{    
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: IGeo;        
  } 
  
  interface IGeo{
    lat: string;
    lng: string;
    }