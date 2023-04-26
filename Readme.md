# Setting up a Node.js app on a Linux AMI on an AWS EC2 instance with Nginx

1. 

![Untitled](Presentation/Untitled.png)

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

![Untitled](Presentation/Untitled%201.png)

### Only after the new session

![Untitled](Presentation/Untitled%202.png)

```bash
sudo yum install git
```

![Untitled](Presentation/Untitled%203.png)

![Untitled](Presentation/Untitled%204.png)

![Untitled](Presentation/Untitled%205.png)

![Untitled](Presentation/Untitled%206.png)

```bash
nvm install node
```

![Untitled](Presentation/Untitled%207.png)

![Untitled](Presentation/Untitled%208.png)

![Untitled](Presentation/Untitled%209.png)

![Untitled](Presentation/Untitled%2010.png)

```bash
npm install -g pm2
```

![Untitled](Presentation/Untitled%2011.png)

```bash
pm2 start index.js
```

![Untitled](Presentation/Untitled%2012.png)

```bash
sudo yum install -y nginx
```

![Untitled](Presentation/Untitled%2013.png)

![Untitled](Presentation/Untitled%2014.png)
