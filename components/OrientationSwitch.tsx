import Link from "next/link";
import styled from "styled-components";

const StyledOrientationSwitch = {
  StyledButtons: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    width: fit-content;
  `,
};
export const OrientationSwitch = () => {
  return (
    <>
      <StyledOrientationSwitch.StyledButtons>
        <Link href={"/film"} passHref>
          <button>Film</button>
        </Link>
        <Link href={"/shorts"} passHref>
          <button>Shorts</button>
        </Link>
        <Link href={"/photo"} passHref>
          <button>Photo</button>
        </Link>
      </StyledOrientationSwitch.StyledButtons>
    </>
  );
};
