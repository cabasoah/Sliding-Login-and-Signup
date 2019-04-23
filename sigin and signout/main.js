/* getting id using DOM */
const SignUpButton = document.getElementById('SignUp');
const SignInButton = document.getElementById('SignIn');
const container = document.getElementById('container');

/* setting event listerner to add new class */
SignUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
SignInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));