module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended', // react.js 프로젝트 시 필요
    'plugin:prettier/recommended', // eslint의 포매팅 기능을 prettier로 사용. 항상 마지막에 세팅 되어야? (eslint-plugin-prettier)
    'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint', // eslint의 typescript 포매팅 기능을 제거 (eslint-config-prettier)
  ],
  // ignorePatterns: ['.eslintrc.js'], // The file does not match your project config: eslintrc.js 에러 해결을 위해 필요
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json', // parser: @typescript-eslint/parsergst를 활성화 하기 위해 꼭 필요
    sourceType: 'module', // 모듈 시스템 사용 시
  },
  plugins: ['import', 'jest', 'prettier', '@typescript-eslint'],
  root: true, // 해당 설정 파일이 root 임을 명시하는 옵션. true라면 상위 설정 파일 찾기를 여기서 멈춘다.
  rules: {
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-var-requires': 'error', // typescript에서 var 변수 사용 시 에러 발생
    'array-bracket-spacing': ['warn', 'never'], // 대괄호 안에 간격 삽입. always로 설정할 경우 prettier와 충돌 발생
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'generator-star-spacing': 'off', // allow async-await
    'import/no-unresolved': ['error', { commonjs: true, amd: true }], // 프론트엔드 라이브러리를 사용할 때는 'off'로 둘 것을 권장
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['Input'],
        depth: 1,
      },
    ], // 기본 html 태그가 아닌 custom component에서 웹 접근성 관련 에러 발생 방지
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그(li, div 등)에 onClick 등과 같은 이벤트를 연결할 때 필요
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['button', 'menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그에 onClick 등과 같은 이벤트를 연결하고 해당 태그의 사용 목적을 role 속성으로 명시할 때 필요
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-multiple-empty-lines': 'warn', // 여러 줄 공백 금지
    'no-nested-ternary': 'warn', // 중첩 삼항 연산자 금지
    'no-new-object': 'error',
    'no-undef': 'off', // 함수 시그니처 작성 허용
    'no-underscore-dangle': 'warn', // 변수명 앞에 언더바를 붙일 수 있도록 허용 (e.g. _foo)
    'no-unused-vars': 'off', // 사용하지 않는 변수 금지. @typescript-eslint/no-unused-vars를 활성화 했을 때는 off로 설정할 것
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'], // 중괄호 안에 간격 삽입. objectsInObjects: false 옵션은 사용할 수 없음. prettier의 bracketSpacing에 의해 덮어쓰기 되기 때문
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ], //delete 'cr' prettier/prettier 오류를 피하기위해 윈도우 유저에게 필요한 부분
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': 'off', // allow debugger during development
  },
}
