import axios from 'axios';

const baseURL = `http://llwiki.p-e.kr:8000/`;

// 문서 내용 불러오기
export const getDocsContent = async (title : string) => {
    try{
        const response = await axios.get(`${baseURL}/recent/docs/${title}/`);
        console.log(response);
        if(response.status === 200){
            return response.data;
        }
        else{
            console.log('Error occurred while fetching backlinks');
        }
    }
    catch(error){
        console.error(error);
    }
};