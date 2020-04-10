/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import SimpleUploadAdapterStrapi from 'ckeditor5-upload-strapi/src/adapters/simpleuploadadapterstrapi';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import Title from '@ckeditor/ckeditor5-heading/src/title.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

export default class AdvancedEditor extends ClassicEditorBase {}

// Plugins to include in the build.
AdvancedEditor.builtinPlugins = [
	Essentials,
	Alignment,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CKFinderUploadAdapter,
	EasyImage,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	MediaEmbedToolbar,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	SimpleUploadAdapterStrapi,
	SpecialCharacters,
	SpecialCharactersEssentials,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	Title,
	TodoList,
	Underline,
	UploadAdapter
];

// Editor configuration.
AdvancedEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'CKFinder',
			'|',
			'heading',
			'fontFamily',
			'fontSize',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'fontBackgroundColor',
			'fontColor',
			'|',
			'indent',
			'outdent',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'link',
			'imageUpload',
			'mediaEmbed',
			'insertTable',
			'blockQuote',
			'specialCharacters',
			'horizontalLine',
			'pageBreak'
		]
	},
	alignment: {
		options: [ 'left', 'right', 'center', 'justify' ]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		],
		resizeUnit: 'px'
	},
	fontBackgroundColorConfig: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Light Red'
			},
			{
				color: 'hsl(1,72%,36%)',
				label: 'Red'
			},
			{
				color: 'hsl(4,100%,23%)',
				label: 'Dark Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Light Orange'
			},
			{
				color: 'hsl(30,95%,39%)',
				label: 'Orange'
			},
			{
				color: 'hsl(29,100%,30%)',
				label: 'Light brown'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Light Yellow'
			},
			{
				color: 'hsl(47,100%,38%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},
			{
				color: 'hsl(123,64%,27%)',
				label: 'Dark Green'
			},
			{
				color: 'hsl(138,100%,15%)',
				label: 'Grass Green'
			},
			{
				color: 'hsl(150, 75%, 60%)',
				label: 'Aquamarine'
			},
			{
				color: 'hsl(180, 75%, 60%)',
				label: 'Turquoise'
			},
			{
				color: 'hsl(210, 75%, 60%)',
				label: 'Light blue'
			},
			{
				color: 'hsl(240, 75%, 60%)',
				label: 'Blue'
			},
			{
				color: 'hsl(240,65%,45%)',
				label: 'Dark Blue'
			},
			{
				color: 'hsl(241,65%,23%)',
				label: 'Deep Dark Blue'
			},
			{
				color: 'hsl(270, 75%, 60%)',
				label: 'Light Purple'
			},
			{
				color: 'hsl(264,53%,40%)',
				label: 'Purple'
			},
			{
				color: 'hsl(260,63%,28%)',
				label: 'Dark Purple'
			}
		]
	},
	fontColorConfig: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Light Red'
			},
			{
				color: 'hsl(1,72%,36%)',
				label: 'Red'
			},
			{
				color: 'hsl(4,100%,23%)',
				label: 'Dark Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Light Orange'
			},
			{
				color: 'hsl(30,95%,39%)',
				label: 'Orange'
			},
			{
				color: 'hsl(29,100%,30%)',
				label: 'Light brown'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Light Yellow'
			},
			{
				color: 'hsl(47,100%,38%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},
			{
				color: 'hsl(123,64%,27%)',
				label: 'Dark Green'
			},
			{
				color: 'hsl(138,100%,15%)',
				label: 'Grass Green'
			},
			{
				color: 'hsl(150, 75%, 60%)',
				label: 'Aquamarine'
			},
			{
				color: 'hsl(180, 75%, 60%)',
				label: 'Turquoise'
			},
			{
				color: 'hsl(210, 75%, 60%)',
				label: 'Light blue'
			},
			{
				color: 'hsl(240, 75%, 60%)',
				label: 'Blue'
			},
			{
				color: 'hsl(240,65%,45%)',
				label: 'Dark Blue'
			},
			{
				color: 'hsl(241,65%,23%)',
				label: 'Deep Dark Blue'
			},
			{
				color: 'hsl(270, 75%, 60%)',
				label: 'Light Purple'
			},
			{
				color: 'hsl(264,53%,40%)',
				label: 'Purple'
			},
			{
				color: 'hsl(260,63%,28%)',
				label: 'Dark Purple'
			}
		]
	},
	fontFamilyConfig: {
		options: [
			'default',
			'Roboto, Arial, Helvetica, sans-serif',
			'Arial, Helvetica, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif'
		]
	},
	fontSizeConfig: {
		options: [ 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40 ]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }
		]
	},
	tableConfig: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'fontBackgroundColor',
			'fontColor'
		],
		tableCellProperties: {
			borderColors: [
				{
					color: 'hsl(0, 0%, 0%)',
					label: 'Black'
				},
				{
					color: 'hsl(0, 0%, 30%)',
					label: 'Dim grey'
				},
				{
					color: 'hsl(0, 0%, 60%)',
					label: 'Grey'
				},
				{
					color: 'hsl(0, 0%, 90%)',
					label: 'Light grey'
				},
				{
					color: 'hsl(0, 0%, 100%)',
					label: 'White',
					hasBorder: true
				}
			],
			backgroundColors: [
				{
					color: 'hsl(120, 75%, 60%)',
					label: 'Light Green'
				},
				{
					color: 'hsl(0, 75%, 60%)',
					label: 'Light Red'
				},
				{
					color: 'hsl(210, 75%, 60%)',
					label: 'Light blue'
				},
				{
					color: 'hsl(0, 0%, 60%)',
					label: 'Grey'
				},
				{
					color: 'hsl(0, 0%, 100%)',
					label: 'White',
					hasBorder: true
				}
			]
		},
		tableProperties: {
			borderColors: [
				{
					color: 'hsl(0, 0%, 0%)',
					label: 'Black'
				},
				{
					color: 'hsl(0, 0%, 30%)',
					label: 'Dim grey'
				},
				{
					color: 'hsl(0, 0%, 60%)',
					label: 'Grey'
				},
				{
					color: 'hsl(0, 0%, 90%)',
					label: 'Light grey'
				},
				{
					color: 'hsl(0, 0%, 100%)',
					label: 'White',
					hasBorder: true
				}
			],
			backgroundColors: [
				{
					color: 'hsl(120, 75%, 60%)',
					label: 'Light Green'
				},
				{
					color: 'hsl(0, 75%, 60%)',
					label: 'Light Red'
				},
				{
					color: 'hsl(210, 75%, 60%)',
					label: 'Light blue'
				},
				{
					color: 'hsl(0, 0%, 60%)',
					label: 'Grey'
				},
				{
					color: 'hsl(0, 0%, 100%)',
					label: 'White',
					hasBorder: true
				}
			]
		}
	},
	link: {
		decorators: {
			addTargetToLinks: {
				mode: 'manual',
				label: 'Open in a new tab (_blank, no-follow)',
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer nofollow'
				}
			}
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
