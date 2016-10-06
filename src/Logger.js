export default function(msg) {
    if ("production" !== process.env.NODE_ENV) console.log(msg);
}