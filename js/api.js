class API {
    constructor() {
        this.options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '3f199693abmsh12d133be29f31a8p1e6d8djsn2c063cb46ec8',
                'x-rapidapi-host': 'shazam.p.rapidapi.com'
            },
        };
        //base url tekrar tekrar kullanılacağından 
        this.baseURL = `https://shazam.p.rapidapi.com`;

    }

    //opoüler müzikleri alan fonk.
    async getPopular(){
    /*  (term="kiss%20the%20rain", locale="en-US", offset="0", limit="5") {
        const params = new URLSearchParams({
            term,
            locale, 
            offset,
            limit,

        }).toString(); */
        try {
            const response = await fetch(`${this.baseURL}/search?term=neffex`, this.options

            ); //${params}


            //gelen veriyi json formatından js nesnesine çevir
            const data = await response.json();
           

            //api den gelen veri fonksiyon çağırıldığında geri dönder
            return data.tracks.hits.map((item) => item.track)

        } catch (error) {
            alert(`Hata:${error}`);

            return [];

        }
    }



    //aratılan müzikleri alan fonksiyon

    async getSearchMusic(query){

        //api e istek at
        const response= await fetch(`${this.baseURL}/search?term=${query}`,this.options);
        
        //api den gelen veriyi js versine dönüştür

        const songs= await response.json()

        //!apiden veri çektikten sonra json veri tipine dönüşütülüdükten sonra artistin içindeki değere ulşıp bunu map ile dönüp return edecek
        return songs.tracks.hits.map((item)=> item.track);
    }
}

export default API;



