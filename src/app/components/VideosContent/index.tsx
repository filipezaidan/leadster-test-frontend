"use client";

import { useState } from "react";

import { Divider } from "../HeroContent/styles";
import {
  Container,
  Body,
  Footer,
  Header,
  ButtonPage,
  Text,
  FooterContent,
  ButtonCategory,
  SelectContainer,
  SelectTitle,
  Select,
  ButtonCategoryContainer,
  HeaderLeftContent,
  HeaderRightContent,
} from "./styles";
import { Thumbnail } from "../Thumbnail";

import {
  VideoCategoryType,
  VideoCategories,
  VideosMock,
  VideoLimitPage,
} from "@/app/mock/Videos";

export const VideosContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [videos, setVideos] = useState(VideosMock);
  const [filterCategory, setVideoCategory] = useState<
    VideoCategoryType | "Todos"
  >("Todos");

  const indexOfLastItem = currentPage * VideoLimitPage;
  const indexOfFirstItem = indexOfLastItem - VideoLimitPage;
  const currentItems = videos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(videos.length / VideoLimitPage);

  const handleFilterVideosByCategory = (category: VideoCategoryType) => {
    const filteredVideos = VideosMock.filter(
      (video) => video.category === category
    );

    setVideos(filteredVideos);
    setVideoCategory(category);
  };

  const handleShowAllVideos = () => {
    setVideos(VideosMock);
    setVideoCategory("Todos");
  };

  return (
    <Container>
      <Header>
        <HeaderLeftContent>
          <ButtonCategoryContainer>
            <ButtonCategory
              onClick={handleShowAllVideos}
              isSelected={filterCategory === "Todos"}
            >
              Todos
            </ButtonCategory>
            {VideoCategories.map((categorie, key) => (
              <ButtonCategory
                isSelected={filterCategory === categorie}
                onClick={() => handleFilterVideosByCategory(categorie)}
                key={key}
              >
                {categorie}
              </ButtonCategory>
            ))}
          </ButtonCategoryContainer>
        </HeaderLeftContent>
        <HeaderRightContent>
          <SelectContainer>
            <SelectTitle>Ordenar por</SelectTitle>

            <Select>
              <option>Data de publicação</option>
              <option>Visualizações</option>
              <option>Classificação</option>
            </Select>
          </SelectContainer>
        </HeaderRightContent>
      </Header>

      <Divider />

      <Body>
        {currentItems.map((video, index) => (
          <Thumbnail
            key={index}
            title={video.title}
            thumbnail={video.thumbnail}
          />
        ))}
      </Body>

      <Divider />

      <Footer>
        <Text>Página</Text>
        <FooterContent>
          {Array.from({ length: totalPages }, (_, index) => (
            <ButtonPage
              isSelected={currentPage === index + 1}
              key={index}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </ButtonPage>
          ))}
        </FooterContent>
      </Footer>
    </Container>
  );
};
