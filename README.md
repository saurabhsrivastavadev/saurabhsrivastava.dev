# saurabhsrivastava.dev
An insight into my dev journey

# Setting up static site development with tailwind support 
- mkdir [app_folder]
- cd [app_folder]
- npm install -D tailwindcss
- npx tailwindcss init
- Update this line in tailwind.config.js -> <b>content: ["./dist/**/*.{html,js}"]</b>
- Create <b>src/input.css</b> file, and add the @tailwind directives to it.
- Compile the input.css file to output.css in dist folder with below command.
- <b>npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch</b>
- Now continue to add index.html and other static files directly in dist folder.
- This approach is good enough if you only ever wish to work with plain static files, along with tailwind support.
- You can now deploy the dist folder to your hosting provider, such as Firebase. 
