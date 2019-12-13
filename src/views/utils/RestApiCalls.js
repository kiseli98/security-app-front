
class RestApiCalls{
    static API_URL = "http://localhost:8081";
    static CORS_HEADERS = {
        mode: 'cors',
        headers:{
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        }
    };

    static loadProjects(){
        return fetch(this.API_URL + "/projects",{
            ...this.CORS_HEADERS
        })
        .then( res => res.json())
    }
    
    static loadTopInvestors(top=3){
        return fetch(this.API_URL + `/users?role=INVESTOR&top=${top}` , {
            ...this.CORS_HEADERS
        })
        .then( res => res.json())
    }
    

    static async loadCategories(){
        fetch(this.API_URL + "/projects/categories",{
            ...this.CORS_HEADERS
        })
        .then( res => res.json())
        .then(loadedCategories => {  return this.setState({loadedCategories})}
        );
    }
}

export default RestApiCalls;