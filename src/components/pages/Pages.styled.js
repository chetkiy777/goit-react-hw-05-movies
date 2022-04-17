import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 900px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

`

export const MainInfoBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    img {
        width: 200px;
    }
`

export const AdditionalInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 3px solid lightgray;
  border-bottom:  3px solid lightgray;
  margin-top: 5px;
  padding-top: 10px;
  padding-bottom: 3px;
    
`

export const AboutFilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
    
`

