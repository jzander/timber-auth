import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const RichTextOptions = (website, noOfLines) => {
  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className={'font-bold'}>{text}</span>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: ({data}, children) => (
        <a
          href={data.uri}
          target={`${data.uri.startsWith(website) || data.uri.startsWith('/') ? '_self' : '_blank'}`}
          rel={`${data.uri.startsWith(website) || data.uri.startsWith('/') ? '' : 'noopener noreferrer'}`}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={noOfLines ? `line-clamp-${noOfLines} pb-2` : 'pb-2'}>
          {children}
        </p>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="ml-4 list-disc">
          {children}
        </li>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="mb-2 list-disc pl-4">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="mb-2 list-decimal pl-4">
          {children}
        </ol>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="pt-2 pb-1 text-3xl font-bold">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="pt-2 pb-1 text-2xl font-semibold">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="pt-2 pb-1 text-xl font-medium">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="pt-2 pb-1 text-lg font-medium">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="pt-2 pb-1 text-base font-medium">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="pt-2 pb-1 text-sm font-medium">
          {children}
        </h6>
      ),
      [BLOCKS.TABLE]: (node, children) => (
        <table className="w-full border-collapse border border-gray-300">
          {children}
        </table>
      ),
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="border border-gray-300 p-2">
          {children}
        </td>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => (
        <tr>
          {children}
        </tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
        <th className="border border-gray-300 p-2 bg-gray-200">
          {children}
        </th>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <img
          className="py-5 mx-auto"
          src={node.data?.target?.fields?.file?.url}
          alt={node.data?.target?.fields?.title}
        />
      ),
    },
  }
};


const RichTextSection = ({content, website, noOfLines}) => {
  return (
    <div
      className="max-w-xl md:max-w-6xl mx-auto py-16"
    >
      <div className="space-y-2 px-5">
        {documentToReactComponents(content.json, RichTextOptions(website, noOfLines))}
      </div>
    </div>
  );
};


export default RichTextSection