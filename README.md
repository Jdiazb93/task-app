This is a test project builded with [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), [Prisma](https://www.prisma.io/) and [Vercel](https://vercel.com/)

To see this you can visit [URL](https://tasks-k0320gxrq-jonathan-diazs-projects.vercel.app/)

It is a simple task manager
You can switch between dark and light mode

## IMPORTANT
If you want to run this on your own device, first you need to delete the content of prisma folder and then run the commands listed below.

## RUN ON LOCAL

In order to execute this program on your local enviroment, you need to run the next command.

```bash
npm install #this command is going to install every dependencies.

npx prisma init --datasource-provider sqlite #This creates a sqlite db to storage the tasks

#Migrate the db by running this:
npx prisma migrate dev --name init

#If you want to see this db, you need to run
npx prisma studio #This command is going to show you the db on http://localhost:5555/

#After all this you can start the project by running
npm run dev
```

That's all by now.
You can create new tasks, update current tasks, delete any task and list every one of those visiting localhost:3000/tasks

Hope it works for you.