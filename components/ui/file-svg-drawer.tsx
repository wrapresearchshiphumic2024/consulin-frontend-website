import { Button } from "./button";

export default function FileSvgDrawer({ title }: { title: string }) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 1.41277e-07C10.1007 -6.39624e-05 10.2003 0.0216876 10.2918 0.0637595C10.3834 0.105831 10.4647 0.167225 10.5302 0.243721L13.3209 3.49954C13.4413 3.64016 13.5009 3.82286 13.4866 4.00743C13.4723 4.192 13.3853 4.36333 13.2447 4.48372C13.104 4.60412 12.9213 4.66372 12.7368 4.64941C12.5522 4.63511 12.3809 4.54807 12.2605 4.40744L10.6977 2.58419V12.7907C10.6977 12.9757 10.6242 13.1532 10.4933 13.284C10.3625 13.4149 10.185 13.4884 10 13.4884C9.81497 13.4884 9.63751 13.4149 9.50667 13.284C9.37583 13.1532 9.30233 12.9757 9.30233 12.7907V2.58326L7.73953 4.40744C7.67992 4.47707 7.60718 4.53428 7.52545 4.5758C7.44373 4.61732 7.35463 4.64233 7.26324 4.64941C7.17185 4.6565 7.07996 4.64551 6.99282 4.61708C6.90567 4.58865 6.82498 4.54334 6.75535 4.48372C6.68572 4.42411 6.62851 4.35136 6.58699 4.26964C6.54548 4.18792 6.52046 4.09882 6.51338 4.00743C6.50629 3.91604 6.51728 3.82415 6.54571 3.737C6.57414 3.64986 6.61946 3.56917 6.67907 3.49954L9.46977 0.243721C9.53531 0.167225 9.61665 0.105831 9.70818 0.0637595C9.79971 0.0216876 9.89926 -6.39624e-05 10 1.41277e-07ZM5.34512 6.51349C5.53015 6.5125 5.708 6.58506 5.83954 6.7152C5.97107 6.84534 6.04553 7.02241 6.04651 7.20744C6.0475 7.39248 5.97494 7.57033 5.8448 7.70186C5.71466 7.8334 5.53759 7.90785 5.35256 7.90884C4.33581 7.91442 3.61488 7.94047 3.06698 8.04093C2.54047 8.13861 2.23442 8.29395 2.00837 8.52C1.7507 8.77767 1.58326 9.13953 1.49116 9.82233C1.39721 10.5247 1.39535 11.4558 1.39535 12.7907V13.7209C1.39535 15.0567 1.39721 15.9879 1.49116 16.6902C1.58326 17.373 1.75163 17.734 2.00837 17.9926C2.26605 18.2493 2.62698 18.4167 3.3107 18.5088C4.01209 18.6037 4.94419 18.6047 6.27907 18.6047H13.7209C15.0558 18.6047 15.987 18.6037 16.6902 18.5088C17.373 18.4167 17.734 18.2493 17.9916 17.9916C18.2493 17.734 18.4167 17.373 18.5088 16.6902C18.6028 15.9879 18.6047 15.0567 18.6047 13.7209V12.7907C18.6047 11.4558 18.6028 10.5247 18.5088 9.82139C18.4167 9.13953 18.2484 8.77767 17.9916 8.52C17.7647 8.29395 17.4595 8.13861 16.933 8.04093C16.3851 7.94047 15.6642 7.91442 14.6474 7.90884C14.5558 7.90835 14.4652 7.88982 14.3807 7.85431C14.2963 7.81879 14.2196 7.76699 14.1552 7.70186C14.0908 7.63673 14.0398 7.55955 14.0052 7.47471C13.9706 7.38988 13.953 7.29906 13.9535 7.20744C13.954 7.11582 13.9725 7.0252 14.008 6.94074C14.0435 6.85628 14.0953 6.77964 14.1605 6.7152C14.2256 6.65076 14.3028 6.59978 14.3876 6.56517C14.4724 6.53056 14.5633 6.513 14.6549 6.51349C15.6614 6.51907 16.4995 6.54326 17.1851 6.66884C17.8902 6.79907 18.4902 7.04558 18.9786 7.53395C19.5386 8.09302 19.7786 8.79907 19.8921 9.63628C20 10.4419 20 11.4679 20 12.7395V13.7721C20 15.0447 20 16.0698 19.8921 16.8763C19.7786 17.7135 19.5386 18.4186 18.9786 18.9786C18.4186 19.5386 17.7135 19.7786 16.8763 19.8921C16.0698 20 15.0437 20 13.7721 20H6.22791C4.95628 20 3.93023 20 3.12372 19.8921C2.28651 19.7795 1.5814 19.5386 1.0214 18.9786C0.461395 18.4186 0.221395 17.7135 0.108837 16.8763C-1.38615e-08 16.0698 0 15.0437 0 13.7721V12.7395C0 11.4679 -1.38615e-08 10.4419 0.108837 9.63535C0.220465 8.79814 0.462326 8.09302 1.0214 7.53302C1.50977 7.04558 2.10977 6.79814 2.81488 6.66884C3.50047 6.54326 4.3386 6.51907 5.34512 6.51349Z"
          fill="#1E0342"
        />
      </svg>
      <center>
        <p className=" text-sm text-gray-500 dark:text-gray-400 mt-1">
          Drag & Drop to {title}
        </p>
        <p>or</p>
        <Button
          className="bg-primary-custom_primary rounded-full"
          onClick={(e) => {
            e.preventDefault(); // new line added
            // your further logic
          }}
        >
          Browse file
        </Button>
      </center>
    </>
  );
}
