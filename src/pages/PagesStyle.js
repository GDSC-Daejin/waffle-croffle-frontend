import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 30px 50px;
  background-color: #cccccc;
`;
// Page별 배경 색상 정하기
export const TodayPageWrapper = styled(PageWrapper)`
  background-color: #d2a7a7;
`;
export const WeekPageWrapper = styled(PageWrapper)`
  background-color: #ebd49a;
`;
export const AllPageWrapper = styled(PageWrapper)`
  background-color: #a0cdb2;
`;
export const StarPageWrapper = styled(PageWrapper)`
  background-color: #a1c2cf;
`;

export const ListWrapper = styled.div`
  height: 370px;
  margin: 1px 0 15px 0;
  max-height: 370px;
  overflow-y: auto;

  //::-webkit-scrollbar {
  //  display: none /* Chrome , Safari , Opera */
  //}
  ::-webkit-scrollbar {
    width: 6px; /* 스크롤바의 너비 */
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #4b725f; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #212121;
    border-radius: 11px;
  }
  //background: rgba(102, 102, 102, .1);  /*스크롤바 뒷 배경 색상*/
`;
