import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const { state, toggleModal, children } = props;

  const preventBubbling = (e) => {
    if (!toggleModal) return;
    if (e.target === e.currentTarget) toggleModal();
  };

  return (
    <OuterModal
      className={state ? 'openOuter' : null}
      onClick={preventBubbling}
    >
      <InnerModal className={state ? 'openInner' : null}>{children}</InnerModal>
    </OuterModal>
  );
};

const OuterModal = styled.div`
  /* state false 시 */
  display: none;

  /* 스크롤에 상관없이 화면 가득 채움 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  /* 배경 반투명 */
  background-color: rgba(0, 0, 0, 0.6);

  /* 최상단으로 가져오기 */
  z-index: 999;

  &.openOuter {
    display: block;
    animation: open-Outer 0.3s;
  }

  @keyframes open-Outer {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const InnerModal = styled.div`
  /* state false 시 */
  display: none;
  position: absolute;

  /* child componenet 크기에 맞춤 */
  width: fit-content;
  height: fit-content;

  /* 가운데 정렬 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 최상단으로 가져오기 */
  z-index: 999;

  &.openInner {
    display: block;
    animation: open-Inner 0.7s;
  }

  @keyframes open-Inner {
    from {
      opacity: 0;
      transform: translate(-50%, -70%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

export default Modal;
