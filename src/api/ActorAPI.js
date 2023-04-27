
const API_KEY = '772d3ef719b5e9d84ff9e59e14334a3c';

export async function getActorList() {
    
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    return data.peopleListResult.peopleList;
}

export async function getActorDetail(peopleCd) {

    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key${API_KEY}&peopleCd=${peopleCd}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.peopleInfoResult.peopleInfo;

}
