import { Wrapper, Title, Image } from './style';


const Card = ({ title, img, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Title>
        {title}
      </Title>
      <Image src={img} alt={title} />
    </Wrapper>
  )
}

export default Card