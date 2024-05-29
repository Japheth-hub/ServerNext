const { Router } = require("express");
const stripe = require('stripe')('sk_test_51OyRN5HS8OgzbKuN1yupOveJUk0NlQaAFv3bhGZA3Qk7TGGTpIksCdLfYZT6xDcagzLljrtsvcIQodMLjbd6vkjs00cMWX9vwz');


const {
  UsersAll,
  UsersId,
  UsersName,
  PostsAll,
  PostsId,
  PostsAllId,
  TodosAll,
  TodosStatus,
  TodosId,
  TodosUserId,
} = require("../handlers");


const router = Router();

router.get("/users", UsersAll);
router.get("/users/id/:id", UsersId);
router.get("/users/name/:name", UsersName);
router.get("/posts", PostsAll);
router.get("/posts/:id", PostsId);
router.get("/posts/all/:id", PostsAllId);
router.get("/todos", TodosAll);
router.get("/todos/:status", TodosStatus);
router.get("/todos/id/:id", TodosId);
router.get("/todos/userid/:userId", TodosUserId);


const prod = require('../assets/productos')

router.post("/pay", async(req, res)=>{

    const body = await req.body;
    console.log(body)
    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3000/success',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: body.post.title,
            images: ['https://img.freepik.com/vector-gratis/lindo-pinguino-volando-globos-ilustracion-vectorial-dibujos-animados-vector-aislado-concepto-amor-animal-estilo-dibujos-animados-plana_138676-2016.jpg']
          },
          unit_amount: body.price
        },
        quantity: 1,
      }],
      mode: 'payment',
    });
    res.status(200).json(session)
})


module.exports = router;
