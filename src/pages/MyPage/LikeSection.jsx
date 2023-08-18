import React from 'react';

import Heading from '../../components/molecules/Heading';
import MyUnderline from '../../components/atoms/MyUnderline';
import Space from '../../components/atoms/Space';
import Flex from '../../components/atoms/Flex';
import CourseCard from '../Main/CourseCard';

const LikeSection = ({ likedData }) => {
  return (
    <div>
      <Heading size="30px" weight={700} children="찜한 강의" />
      <MyUnderline />
      <Space height="100px" />
      <Flex direction="row" gap="40px">
        {likedData.map((it) => (
          <CourseCard key={it.id} data={it} />
        ))}
      </Flex>
    </div>
  );
};

export default LikeSection;
