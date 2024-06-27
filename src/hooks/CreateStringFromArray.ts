//create from array objects string for api
export const CreateStringFromArray = (object: any[]) => {
    let strValues = "";
    object.forEach(element => {
        strValues += "genres.name=" + element.name + "&";
    });
    return strValues;
}