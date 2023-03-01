import { useGlobalState } from "../global/UserGlobalData";



function PostBrand() {
    const saveBrandURL = "http://localhost:9098/api/catalog/brand/v5/save";
  
    return saveBrandURL;
  }


export {PostBrand };
