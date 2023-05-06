# react-components-library
재사용 가능한 리액트 컴포넌트를 모아놓은 라이브러리

# installing
`npm i @dahyeeee/react-components-library`

# Components

## Modal
document.body (html최상단 요소)에서 모달창이 열립니다.

### imports
```typescript
import { Modal } from '@dahyeeee/react-components-library'
```

### Props Type
- `$position?`: 'bottom' | 'top' | 'middle' (모달의 위치, default value= 'bottom')
- `isModalVisible`: boolean (true일 때 모달이 보이고 false일 때 모달이 보이지 않음)
- `closeModal`: ()=>{} (isModalVisible의 값을 false로 바꿔주는 함수)

### Usage Example
```typescript
import { useState } from 'react';
import { Modal } from "@dahyeeee/react-components-library";

const PageWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const openModal = () => {
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
  }
  
  return (
      <>
        <button type="button" onClick={openModal}>
          Open Modal{" "}
        </button>
        <Modal
          $position="middle"
          isModalVisible={isModalOpen}
          closeModal={closeModal}
        >
          <div> This is where modal content is showing. </div>
        </Modal>
      </>
  );
};
```

