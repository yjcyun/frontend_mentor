import styled from 'styled-components';

interface MenuListItemProps {
  img: string;
  title: string;
  description: string;
}

const StyledMenuListItem = styled.li`
  color: var(--white);
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 24px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  h3 {
    margin-bottom: 4px;
  }

  .img-cont {
    position: relative;
    display: flex;

    img {
      width: 128px;
    }

    .img-pattern {
      margin-top: 2rem;
      width: 32px;
      height: 1px;
      background: var(--beaver);
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;

    .img-cont {
      img {
        width: 100%;
      }

      .img-pattern {
        display: none;
      }
    }
  }
`;

export const MenuListItem: React.FC<MenuListItemProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <StyledMenuListItem>
      <div className='img-cont'>
        <img src={img} alt={title} />
        <div className='img-pattern'></div>
      </div>
      <div>
        <h3>{title}</h3>
        <p className='body2'>{description}</p>
      </div>
    </StyledMenuListItem>
  );
};
