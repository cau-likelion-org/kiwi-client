import axios from 'axios';

const baseURL = `http://llwiki.p-e.kr:8000/`;

// 역링크 리스트 불러오기
export const getReverseList = async (title : string) => {
    try{
        const response = await axios.get(`${baseURL}/docs/recent/${title}/backlink/`);
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