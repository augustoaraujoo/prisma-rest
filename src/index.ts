import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/signup`, async (req, res) => {
  const { name, email } = req.body;
  const createUser = await prisma.user.create({
    data: {
      name,
      email
    }
  })
  return res.status(200).json(createUser)
})

app.post(`/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body;

  const createPost = await prisma.post.create({
    data: {
      title,
      content,

      author: {
        connect: {
          email: authorEmail
        }
      }
    }
  })
  res.json(createPost);

})

app.put('/post/:id/views', async (req, res) => {
  const { id } = req.params;
  // viewCount recebendo 1 ao ser chamado
  const result = await prisma.post.update({
    where: {
      id: parseInt(id),
    },
    data: {
      viewCount: {
        increment: 1,
      }
    }
  })

  return res.json(result)

})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params;

  const result = await prisma.post.update({
    where: {
      id: parseInt(id),
    },
    data: {
      published: true,
    }
  })
  return res.json(result);

})

app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params;

  const result = await prisma.post.delete({
    where: {
      id: parseInt(id)
    }
  })
  return res.json(result);
})

app.get('/users', async (req, res) => {
  const result = await prisma.user.findMany();
  return res.json(result);
})

app.get('/user/:id/drafts', async (req, res) => {
  const { id } = req.params;
  const result = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  }).posts({
    where: {
      published: false
    }
  })
  return res.json(result);

})

app.get(`/post/:id`, async (req, res) => {
  const { id } = req.params;
  const result = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }
  })
  return res.json(result);
})

app.get('/feed', async (req, res) => {

})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
