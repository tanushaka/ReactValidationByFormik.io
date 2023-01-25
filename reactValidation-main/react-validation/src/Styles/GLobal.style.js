import styled  from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
@media (min-width: 576px) {
    max-width: 540px;
}
@media (min-width: 768px) {
    max-width: 720px;
}
@media (min-width: 992px) {
    max-width: 960px;
}
@media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
export const Container_fluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
export const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const ColWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;
export const Col = styled(ColWrapper)`
 -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: 0;
  margin-left: 0;
`;
export const Col_1 = styled(ColWrapper)`
 -webkit-box-flex: 0;
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
`;
export const Col_2 = styled(ColWrapper)`
 -webkit-box-flex: 0;
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
`;
export const Col_3 = styled(ColWrapper)`
 -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
`;
export const Col_4 = styled(ColWrapper)`
 -webkit-box-flex: 0;
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`;
export const Col_5 = styled(ColWrapper)`
 -webkit-box-flex: 0;
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
`;
export const Col_6 = styled(ColWrapper)`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
`;
export const Col_7 = styled(ColWrapper)`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
`;
export const Col_8 = styled(ColWrapper)`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`;
export const Col_9 = styled(ColWrapper)`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
`;
export const Col_10 = styled(ColWrapper)`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
`;
export const Col_11 = styled(ColWrapper)`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
`;
export const Col_12 = styled(ColWrapper)`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;