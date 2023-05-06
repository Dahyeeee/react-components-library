# react-components-library

재사용 가능한 리액트 컴포넌트를 모아놓은 라이브러리
<br>
<br>
<br>

# installing

`npm i @dahyeeee/react-components-library`
<br>
<br>
<br>

# Components

## Modal

document.body (html최상단 요소)에서 모달창이 열립니다.

### imports

```typescript
import { Modal } from "@dahyeeee/react-components-library";
```

### Props

| props          | value                                          | description                                     |
| -------------- | ---------------------------------------------- | ----------------------------------------------- |
| $position      | 'bottom', 'top', 'middle' (default = 'bottom') | 모달의 위치를 정할 수 있습니다.                 |
| isModalVisible | boolean                                        | 모달이 화면에 나타남의 유무를 정할 수 있습니다. |
| closeModal     | function                                       | isModalVisible의 값을 false로 바꿔주는 함수.    |

### Usage Example

```typescript
import { useState } from "react";
import { Modal } from "@dahyeeee/react-components-library";

const PageWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        open
      </button>
      <Modal
        $position="middle"
        isModalVisible={isModalOpen}
        closeModal={closeModal}
      >
        {/* You can locate your Modal contents here */}
      </Modal>
    </>
  );
};
```
