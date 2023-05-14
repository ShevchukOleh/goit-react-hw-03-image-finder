import styled from "styled-components";

export const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const Text = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
`