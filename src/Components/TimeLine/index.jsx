import { ContainerTimeLine, Rb, RbItem, TimeStamp, TitleItem} from "./styled";


const TimeLine = (props) => {
    return(
        
        <ContainerTimeLine>
            <Rb>
            {props.items && props.items.map((item, index) => (
                <RbItem key={index}>
                    <TimeStamp>
                    {item.title}
                    </TimeStamp>
                    <TitleItem>{item.descricao}</TitleItem>
                </RbItem>     
            ))}
            </Rb>
        </ContainerTimeLine>
      
    )
}

export default TimeLine;