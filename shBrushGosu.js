/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Created by JP Camara @ www.jpcamara.com
		
		var keywords =	
						'abstract assert boolean break byte case catch char class ' +
						'continue do double else enum extends ' +
						'false final finally float for if implements uses ' +
						'typeis int interface long new null ' +
						'package private protected public return ' +
						'short static super switch this throw true ' +
						'try void while enhancement protocol ' +
						'function block as represents delegate ' +
						'readonly property get set using var ' +
						'print construct in override and or ' +
						'not params classpath index typeof';
		var common = 
						'String List Map';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,	css: 'comments' },		// one line comments			
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,					css: 'comments' },	// documentation comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: /\@[\$\w]+\b/g,					css: 'color1' },		// annotation @anno
			{ regex: /(?!\)):[\$\w]+/g,					css: 'color3' },		// named params and object construct
			// { regex: new RegExp(this.getKeywords(common), 'gm'),				css: 'color2' },			// common classes
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }		// gosu keywords
			];

		this.forHtmlScript({
			left	: /(&lt;|<)%[@!=]?/g, 
			right	: /%(&gt;|>)/g 
		});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['gosu', 'gs'];

	SyntaxHighlighter.brushes.Gosu = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
