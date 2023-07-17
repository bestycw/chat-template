const Koa = require("koa");
const { PassThrough } = require("stream");
const cors = require("koa2-cors");
const router = require("koa-router")();
const app = new Koa();
app.use(cors());
const text = [
  "i",
  "am",
  "123",
  "1213123",
  "123123",
  "12313",
  "3123123",
  "333333",
  "123123",
];
router.post("/chat", async (ctx) => {
  console.log(ctx);
  // if (ctx.path !== "/chat") {
  //   return await next();
  // }

  ctx.request.socket.setTimeout(0);
  ctx.req.socket.setNoDelay(true);
  ctx.req.socket.setKeepAlive(true);

  ctx.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const stream = new PassThrough();

  ctx.status = 200;
  ctx.body = stream;
  // for (const value of text) {
  //   stream.write(`data:{ "data":"${value}"}\n\n`); // 写入数据(推送数据)
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }
  // stream.write(`data:[DONE]\n\n`);
  // // 结束流
  // stream.end();
  let timer = setInterval(() => {
    const value = text.pop();
    console.log(text.length);
    if(text.length <=1){
      stream.write(`data:[DONE]\n\n`);
      clearInterval(timer)
      stream.end();
    }
    stream.write(`data:{ "data":"${value}"}\n\n`);
  }, 1000);
  // // // 结束流
  // stream.end();
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => console.log("Listening"));
