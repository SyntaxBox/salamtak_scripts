//*** Code deprecated */
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { Copy } from ".";
// export function Code({
//   title,
//   codeString,
//   language,
// }: {
//   title: string;
//   codeString: string;
//   language: string;
// }) {
//   return (
//     <div
//       className="flex flex-col px-2 rounded-2xl overflow-hidden"
//       style={{ background: "#080b16" }}
//     >
//       <div className="flex justify-between items-center px-3 py-1 text-slate-400">
//         <div className="w-full flex items-center justify-center">
//           <p>{title}</p>
//         </div>
//         <Copy text={codeString} />
//       </div>
//       <SyntaxHighlighter
//         customStyle={{
//           background: "#080b16",
//         }}
//         language={language}
//         style={atomOneDarkReasonable}
//       >
//         {codeString}
//       </SyntaxHighlighter>
//     </div>
//   );
// }
