> # 로그인, 회원가입 및 결제시스템 <with: Next.js>

[SeungJae`s World](https://seungjaeworld.vercel.app/)

<br />

<img src="https://github.com/seungjaelee2684/nextjs-signup-page/assets/135948012/8edf2448-518f-4dbf-975b-bbf9d142a8f9" width="380" height="400">
<img src="https://github.com/seungjaelee2684/nextjs-signup-page/assets/135948012/d73abd73-dc71-411c-881a-2b65cdeabd68" width="380" height="400">

<br />

> ## Skills

[로그인과 회원가입](#loginSignup)
[결제 시스템](#payment)

> ## <a id="loginSignup">라이브러리(로그인, 회원가입)</a>

1. shadcn-ui
2. zod
3. React-Hook-Form

> ### shadcn-ui
* **사용된 컴포넌트**
    * **Card**
        * 카드 컴포넌트를 이용해 form요소와 input태그들을 정해둔 틀안에 깔끔하게 배치 시킴.
    * **Form**
        * form태그 내에 필요 요소들을 자연스럽고 통일성있는 디자인으로 배치 시킴.
    * **Input**
        * input 태그를 상위 요소에 style에 맞춰 자연스럽게 배치 시킴.
    * **Button**
        * 라이브러리에서 제공하는 디자인된 버튼을 이용해 버튼 요소들의 통일성을 높이면서 기능에 따라 유동적으로 디자인을 변경할 수 있었음.
    * **Select**
    * **Label**
    * **Dropdown-menu**
        * 다크모드 기능을 추가하기 위해 사용. 드롭다운으로 설정을 변경할 수 있게 함.
    * **Toast**
        * 여러 상황에서 사용될 alert메세지를 toast컴포넌트를 이용해 통일성을 주고 재사용성을 늘렸음. *Provider*로 상위에서 감싸 어느 곳에서든 사용할 수 있게 함.
> ### zod
* Validation설정을 한 스키마를 auth.ts파일 한 곳에 몰아두고 form요소에 입력될 value들을 z.object객체에 담아 사용함.

> ### React-Hook-Form
* 라이브러리에 useForm기능으로 form요소의 값들을 한꺼번에 관리하고 zod로 설정한 스키마와 함께 사용해 validate과정을 한번의 시도로 간결하게 완료할 수 있게 구현함.
* 기존 useForm으로는 value값에 대한 유효성 검사과정을 설정해주어야 했지만 *@hookform/resolvers* 라이브러리에 *zodResolver*를 사용해 유효성 검사를 쉽게 처리할 수 있게 구현함.

***

**새롭게 시도한 것**
* input 컴포넌트와 select 컴포넌트를 함께 사용하여 이메일을 보다 쉽게 입력할 수 있게 구현함.
* tailwind css를 이용해 기존 shadcn-ui 라이브러리에서 제공하는 스타일의 컴포넌트들을 내가 원하는 디자인으로 변형해봄.

**시도하려다 실패한 것**
* dialog 컴포넌트를 이용해 비밀번호와 비밀번호 확인 작업을 할 수 있게 하려 했으나 form태그 안에 dialog요소들을 집어넣어 한번에 관리하게끔 시도했음에도 원하는 기능을 수행하지 못해 구현을 포기함.

***

> ## <a id="payment">라이브러리(결제 시스템)</a>

1. shadcn-ui