<a name="readme-top"></a>

<h1 align="center">
  <br />
  <a href="https://github.com/GabrielGuedess/api-mobilogistica"><img src="https://mobi.com.br/site/images/logo-mobi-logistica.svg" width="200"></a>
  <br />
  <br />
 
  API Mobi Logística
  <br>
</h1>

<h4 align="center">Node.js challenge developed for <a href="https://mobi.com.br"><em>Mobi Logística</em></a></h4>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/github/actions/workflow/status/GabrielGuedess/api-mobilogistica/ci.yml?label=CI">
  </a>

  <a href="#">
    <img src="https://img.shields.io/github/languages/top/GabrielGuedess/api-mobilogistica">
  </a>
  
  <a href="#">
    <img src="https://img.shields.io/github/languages/count/GabrielGuedess/api-mobilogistica">
  </a>

  <a href="https://wakatime.com/@GabrielGuedess/projects/wspchphtbp?start=2023-05-22&end=2023-05-28">
    <img src="https://wakatime.com/badge/user/61e5a18d-725a-4cdb-8e21-f86ffc2f24db/project/905e8060-fcde-4ce4-9aa4-4e2eac2caa0c.svg" alt="Wakatime">
  </a>
</p>

  <p align="center">
    <a href="https://api-mobi.onrender.com/docs">View Demo</a>
    ·
    <a href="https://github.com/GabrielGuedess/api-mobilogistica/issues">Report Bug</a>
    ·
    <a href="https://github.com/GabrielGuedess/api-mobilogistica/issues">Request Feature</a>
  </p>

![image](https://github.com/GabrielGuedess/api-mobilogistica/assets/64827875/246eddc1-aed6-4705-9c71-0897a93b5bb3)

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#-built-with">Built With</a></li>
        <li><a href="#-codecov">Codecov</a></li>
      </ul>
    </li>
    <li>
      <a href="#-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#-configuration">Configuration</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
    <li><a href="#-contact">Contact</a></li>
  </ol>
</details>

## About The Project

### 🛠 Built With

The following tools were used in building the project:

- ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
- ![Codecov](https://img.shields.io/badge/Codecov-F01F7A?style=for-the-badge&logo=Codecov&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
- ![Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
- ![Editorconfig](https://img.shields.io/badge/Editor%20Config-E0EFEF?style=for-the-badge&logo=editorconfig&logoColor=000)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Codecov -->

### 🔍 Codecov

Codecov provides metrics and insights into the results of tests through code coverage reports. Coverage reports are used to determine which lines of code were tested and which lines were not tested, which may contain bugs and syntax errors.

<br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 🚀 Getting Started

### Prerequisites

To clone and run this application, you'll need _Git_ and _Docker_ installed on your computer.

### Installation

1. Clone the repository.

```sh
git clone https://github.com/GabrielGuedess/api-mobilogistica
```

2. Go into the repository

```sh
cd api-mobilogistica
```

3. Run Docker.

```sh
docker-compose up -d
```

4. Go into the docker container.

```sh
docker exec -it api_mobi sh
```

5. Init database prisma.

```sh
pnpm prisma generate

pnpm prisma db push
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## 🚨 Configuration

- [ ] Prisma
  - [ ] Add `DATABASE_URL` to .env.
- [ ] Docker Compose
  - [ ] Add `POSTGRES_DB` to .env.
  - [ ] Add `POSTGRES_USER` to .env.
  - [ ] Add `POSTGRES_PASSWORD` to .env.
- [ ] Jwt
  - [ ] Add `JWT_KEY` to .env.

See the [open issues](https://github.com/GabrielGuedess/api-mobilogistica/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 👏 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📄 License

Distributed under the MIT License. See [MIT license](LICENSE.md) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## ⭐ Contact

Gabriel Guedes - [@GabrielRGuedess](https://twitter.com/GabrielRGuedess) - gabrielrguedess@gmail.com

Project Link: [https://api-mobi.onrender.com](https://api-mobi.onrender.com)

---

<p align="center">
Made with ♥ by 👨‍🚀 Gabriel Guedes 👋 <a href="https://www.linkedin.com/in/gabriel-guedess/">Get in touch!</a>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
