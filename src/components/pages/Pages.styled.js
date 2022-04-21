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

export const ImageThumb = styled.div`
  display: block;
  width: 120px;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    display: block;
    width: 100%;
  }
`

export const BlockTitle = styled.p`
  font-weight: bold;
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
  margin-bottom: 10px;
`

export const MovieListItem = styled.li`
  margin-top: 10px;
`


