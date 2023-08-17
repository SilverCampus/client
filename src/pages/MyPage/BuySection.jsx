import React from 'react';
import Heading from '../../components/molecules/Heading';
import MyUnderline from '../../components/atoms/MyUnderline';
import Space from '../../components/atoms/Space';
import Flex from '../../components/atoms/Flex';
import CourseCard from '../Main/CourseCard';

const BuySection = ({ boughtData }) => {
  return (
    <div>
      <Heading size="40px" weight={700} children="구매한 강의" />
      <MyUnderline />
      <Space height="100px" />
      <Flex direction="row" gap="40px">
        {boughtData.map((it) => (
          <CourseCard key={it.id} data={it} />
        ))}
      </Flex>
    </div>
  );
};

export default BuySection;
