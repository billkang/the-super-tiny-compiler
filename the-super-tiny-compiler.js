'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 今天我们将开始一起编写一个编译器。但是不像其他编译器一样，他是一个极其简单的编译器！简单到，当你移除所有注释之后，文件代码只有大约200行。
 * 
 * 我们将会把一些类似lisp语言的函数调用，编译成类似C语言的函数调用。
 * 
 * 如果你不是很熟悉这两种语言，我将会给你一个快速的介绍。
 * 
 * 我们会有两个函数‘add’ 和 ‘subtract’，他们会被写成下面的形式：
 * 
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 * 
 * 是不是相当简单？
 * 
 * 很好，这就是我们将要编译的。虽然这不是一个完整的LISP或C语法，但它足以演示现代编译器的许多主要部分。
 */

/**
 * 大多数编译器分为三个主要部分：解析、转换和代码生成。
 * 
 * 1. 解析：将源代码转换成一个更抽象的代码表示形式（AST）。
 * 
 * 2. 转换：接受这个抽象表示，编译器将在此基础上做其他任何想做的事。
 * 
 * 3. 代码生成：接受转换后的代码表示，并将其转换成新代码。
 */

/**
 * 解析
 * -------
 * 
 * 解析一般可以分为两个过程：词法分析和语法分析。
 * 
 * 1. 词法分析：使用词法分析器将源代码拆分成令牌列表。
 *
 *    令牌是一组用来描述独立块小对象的语法。它们可以是数字、标签、标点符号、运算符等。
 *
 * 2. 语法分析：获取令牌并将它们重新格式化为另一种表示形式，用于描述语法的每一个部分以及他们之间的关系。
 *    这被称为中间表示或者抽象语法树。
 *
 *    抽象语法树（AST）是一种嵌套很深的对象，用一种既容易处理，又能告诉我们很多信息的方式表示代码。
 *
 * 例如下面的语法：
 *
 *   (add 2 (subtract 4 2))
 *
 * 令牌可能会是这样的：
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 抽象语法树 (AST) 可能会是这样的：
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 转换
 * --------------
 *
 * 编译器的下一个阶段是转换。它只是对上一步的抽象语法树做一些修改，这个修改可以只针对当前语言，也可以是用来翻译成一个全新的语言。
 * 
 * 让我们看看，我们是如何转换抽象语法树的。
 *
 * 你可能注意到，我们的AST中有一些看来起非常相似的元素。
 * 这些对象都包含类型属性，这些对象被成为AST的节点。每个节点都有自己的属性，这些节点用以描述抽象语法树的每个独立部分。
 *
 * 我们有一个叫做 "NumberLiteral" 的节点：
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 或者是节点 "CallExpression"：
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * 在转换AST时，我们可以对节点的属性做‘添加/删除/替换’的操作，
 * 我们还可以添加新节点，删除节点，甚至我们可以基于目前的AST构建一个全新的AST。
 *
 * 由于我们的目标是生成一个新的语言，我们将专注于创建一个针对目标语言的全新AST。
 *
 * 遍历
 * ---------
 *
 * 为了浏览所有这些节点，我们需要能够遍历它们。
 * 这个遍历的过程，将按照深度优先的方式访问AST的每个节点。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 * 
 * 针对上面的AST，我们将按照下面的步骤执行：
 *
 *   1. Program - 从AST的顶层开始
 *   2. CallExpression (add) - 移动到Program body的第一个元素
 *   3. NumberLiteral (2) - 移动到CallExpression params的第一个元素
 *   4. CallExpression (subtract) - 移动到CallExpression params的第二个元素
 *   5. NumberLiteral (4) - 移动到CallExpression params的第一个元素
 *   6. NumberLiteral (2) - 移动到CallExpression params的第二个元素
 *
 * 如果我们直接操作这个AST，而不是创建一个单独的AST，我们可能会在这里介绍各种抽象概念。
 * 但是只是访问树的每个介绍，对于我们要做的事情来说已经足够。
 *
 * 我之所以使用“访问”这个词，是因为访问者模式，他用来处理如何在对象结构的元素上进行操作。
 *
 * 访问者
 * --------
 *
 * 这里的基本思路是，我们将创建一个“visitor”对象，该对象具有接受不同节点类型的方法。
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 在我们遍历抽象语法树时，当“进入”一个节点匹配的类型时，我们就会调用访问者上面对应的方法。
 *
 * 为了方便，我们会将节点和父节点的引用传递给方法。
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 与此同时，也存在“退出”时需要执行方法的可能。
 * 想象下我们的树结构是这样的：
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 当我们从上放下遍历的时候，我们会到达每一个分支的尽头。当我们完成每一个分支的操作后，我们会“退出”。
 * 沿着树向下，我们“进入”每一个节点，然后向上，我们“退出”。
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 为了支持这一切，我们的访问者最终形式是这样的：
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成
 * ---------------
 *
 * 编译器的最后阶段是代码生成。有时候，编译器会在此阶段做一些和转换重叠的工作，但是大多数情况下，
 * 代码生成仅仅意味着获取我们的抽象语法树，并将其处理成字符串。
 *
 * 代码生成器有很多种不同的工作方式，一些编译器会重用之前的令牌，另外一些编译器会创建单独的代码表示形式，
 * 这样他就可以逐次打印代码。但就我所知，大多数情况下将会使用我们之前创建的抽象语法树，这也将是我们接下来要关注的。
 *
 * 实际上，我们的代码生成器知道如何“打印”抽象语法树的所有不同节点，
 * 并且它将递归的调用自己来打印内嵌节点，直到所有内容都打印到一个长长的代码字符串中。
 */

/**
 * 就是这样，这些就是编译器所有的部分。
 *
 * 但这并不是说，每个编译器看起来都和我之前描述的一模一样。
 * 面对不同的用途，编译器可能会拥有比我在这里介绍的更多步骤。
 *
 * 但是现在你应该对大多数编译器，有了一个总体的更高层次的概念。
 *
 * 既然我已经解释了所有这些，你们都可以自己编写编译器了，对吧?
 *
 * 开个玩笑，我其实是来帮你的：
 *
 * 让我们开始吧...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                  令牌处理器!
 * ============================================================================
 */

/**
 * 接下来我们介绍的会是解析的第一个步骤，使用令牌处理器进行词法分析。
 *
 * 我们会把我们的字符串代码分解成一个令牌数组。
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 我们首先接受一个字符串代码作为输入项，然后处理两件事情...
function tokenizer (input) {
  // `current` 变量用于跟踪我们在代码中的位置，就像一个游标。
  let current = 0;

  // `tokens` 变量用于存放所有的令牌。
  let tokens = [];

  // 首先我们创建一个‘while’循环，在这个循环中，我们尽可能的递增‘current’变量。
  //
  // 我们之所以要在一个循环中多次增加‘current’，是因为我们的令牌可能会很长。
  while (current < input.length) {
    // 我们还将存储‘input’中，位于‘current’位置的字符
    let char = input[current];

    // 我们首先需要检查的是一个开始括号。它将稍后用于‘CallExpression’，但是现在我们只关心字符本身。
    //
    // 我们检查是否包含开始括号：
    if (char === '(') {
      // 如果是的话，我们将插入一个类型为‘paren’的新令牌，并将值设置为‘(’。
      tokens.push ({
        type: 'paren',
        value: '(',
      });

      // 接着我们让 `current` 加1
      current++;

      // 我们继续下一个循环
      continue;
    }

    // 接下来我们要检查‘)’。
    // 我们做的事情和上一步一样：检查关闭括号，添加新令牌，自增‘current’和继续循环。
    if (char === ')') {
      tokens.push ({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 接下来，我们将检查空格。有趣的是，虽然我们关心存在于分隔符中的空格，但对我们来说，它并不重要。
    // 所以我们不会将他作为令牌而存储，我们只是简单的忽略它。
    //
    // 再这里，我们要做的只是检查它是否存在，如果存在的话，就继续我们的循环。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test (char)) {
      current++;
      continue;
    }

    // 接下来要处理的是数字令牌。
    // 这和我们之前面对的不同，因为数字可以是任意长度，而我们要获取整个字符序列，并将其标记为令牌。
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        只包含两个独立的令牌
    //
    // 我们从遇到字符串的第一个数字开始。
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test (char)) {
      // 我们将创建‘value’变量，用于保存遇到的字符。
      let value = '';

      // 然后，我们会遍历序列中的每个字符，直到遇到一个不是数字的字符，
      // 将每个数字字符插入到‘value’中，并在执行过程中递增‘current’。
      while (NUMBERS.test (char)) {
        value += char;
        char = input[++current];
      }

      // 之后，我们将‘number’标记，插入到令牌数组中。
      tokens.push ({type: 'number', value});

      // 我们继续。
      continue;
    }

    // 我们还将在我们的语言中添加对字符串的支持，这些字符串将是由双引号(")包围的任何文本。
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ 字符串标记
    //
    // 我们先检查开始引号：
    if (char === '"') {
      // 保留 `value` 变量，来构建字符串令牌。
      let value = '';

      // 我们将跳过令牌中的开始双引号。
      char = input[++current];

      // 接着我们将遍历每个字符，直到找到另一个双引号。
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // 跳过结束双引号。
      char = input[++current];

      // 并将“string”标记添加到令牌数组中。
      tokens.push ({type: 'string', value});

      continue;
    }

    // 我们要介绍的最后一个令牌是“名称”令牌。这是一个字母序列，而不是数字，它们是lisp语法中函数的名称。
    //
    //   (add 2 4)
    //    ^^^
    //    名称令牌
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test (char)) {
      let value = '';

      // 这次也一样，我们将会遍历每一个字母，并把它们插入到‘value’变量中。
      while (LETTERS.test (char)) {
        value += char;
        char = input[++current];
      }

      // 将这些值以type为‘name’的形式插入到令牌数组，然后继续。
      tokens.push ({type: 'name', value});

      continue;
    }

    // 最后，如果我们现在有任何字符没有被成功匹配，我们将抛出一个错误并退出执行。
    throw new TypeError ('I dont know what this character is: ' + char);
  }

  // 我们的令牌解析器最后要做的，只是简单的返回刚生成的令牌数组。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                   解析器!!!
 * ============================================================================
 */

/**
 * 对于我们的解析器，该阶段要做的事情就是获取之前的令牌数组，将其转换成抽象语法树。
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 好的，我们定义了一个‘parser’函数，接受‘令牌’数组作为参数。
function parser (tokens) {
  // 同样，我们创建‘current’变量，我们将把他作为游标使用。
  let current = 0;

  // 但是这次我们将使用递归而不是while循环，所以我们定义了‘walk’函数。
  function walk () {
    // ‘walk’函数中，我们首先获取令牌数组中处于‘current’位置的令牌。
    let token = tokens[current];

    // 我们将用不同的代码分支处理不同类型的令牌，首先处理的是‘number’令牌。
    //
    // 我们检查，是否含有一个‘number’令牌。
    if (token.type === 'number') {
      // 如果存在，`current`加一。
      current++;

      // 我们将返回一个‘NumberLiteral’类型的新AST节点，并将其值设置为令牌的值。
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 对于字符串，我们的操作和number一样，创建一个‘StringLiteral’节点。
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 接下来我们将处理‘CallExpressions’，首先我们会遇到开始括号。
    if (token.type === 'paren' && token.value === '(') {
      // 我们将增加‘current’，以跳过括号，因为在AST中我们不需要关注它。
      token = tokens[++current];

      // 我们将创建`CallExpression`类型基础节点, 我们将把名字设置为当前令牌的值，
      // 因为开始括号后的下一个令牌就是函数名称。
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // 在次增加‘current’，以跳过名称令牌。
      token = tokens[++current];

      // 现在我们将遍历每一个令牌，直到遇到结束括号，它们将会是‘CallExpression’节点的‘params’。
      //
      // 这就是递归的由来。我们将依赖递归来解决问题，而不是尝试解析一个潜在的无限嵌套的节点集。
      //
      // 为了解析这点，我们来看Lisp代码。你可以看到‘add’的参数是一个数字和一个嵌套的‘CallExpression’节点，
      // 它又包含自己的数字。
      //
      //   (add 2 (subtract 4 2))
      //
      // 你还会注意到，在我们的令牌数组中还包含了很多结束括号。
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // 我们将依赖于嵌套的‘walk’函数，在任何嵌套的‘CallExpression’之后，增加‘current’变量。

      // 因此我们创建一个‘while’循环，它只有在遇到一个类型为‘paren’、值为‘)’的令牌的时候才会停止。
      while (
        token.type !== 'paren' ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // 我们将会调用‘walk’函数，我们会将其返回值插入到‘node.params’中。
        node.params.push (walk ());
        token = tokens[current];
      }

      // 最后，我们将最后一次增加‘current’，以跳过结束括号。
      current++;

      // 返回node。
      return node;
    }

    // 同样，如果遇到没能识别的令牌，我们将抛出错误。
    throw new TypeError (token.type);
  }

  // 现在，我们将创建根节点为‘Program’的抽象语法树。
  let ast = {
    type: 'Program',
    body: [],
  };

  // 我们将执行‘walk’函数，将节点添加到‘ast.body’中。
  //
  // 我们之所以要使用循环，是因为我们的程序的‘CallExpression’节点不是嵌套关系，而是兄弟节点关系。
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push (walk ());
  }

  // 解析器的最后将返回该抽象语法树。
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                                   遍历器!!!
 * ============================================================================
 */

/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// So we define a traverser function which accepts an AST and a
// visitor. Inside we're going to define two functions...
function traverser (ast, visitor) {
  // A `traverseArray` function that will allow us to iterate over an array and
  // call the next function that we will define: `traverseNode`.
  function traverseArray (array, parent) {
    array.forEach (child => {
      traverseNode (child, parent);
    });
  }

  // `traverseNode` will accept a `node` and its `parent` node. So that it can
  // pass both to our visitor methods.
  function traverseNode (node, parent) {
    // We start by testing for the existence of a method on the visitor with a
    // matching `type`.
    let methods = visitor[node.type];

    // If there is an `enter` method for this node type we'll call it with the
    // `node` and its `parent`.
    if (methods && methods.enter) {
      methods.enter (node, parent);
    }

    // Next we are going to split things up by the current node type.
    switch (node.type) {
      // We'll start with our top level `Program`. Since Program nodes have a
      // property named body that has an array of nodes, we will call
      // `traverseArray` to traverse down into them.
      //
      // (Remember that `traverseArray` will in turn call `traverseNode` so  we
      // are causing the tree to be traversed recursively)
      case 'Program':
        traverseArray (node.body, node);
        break;
      // Next we do the same with `CallExpression` and traverse their `params`.
      case 'CallExpression':
        traverseArray (node.params, node);
        break;
      // In the cases of `NumberLiteral` and `StringLiteral` we don't have any
      // child nodes to visit, so we'll just break.
      case 'NumberLiteral':
      case 'StringLiteral':
        break;
      // And again, if we haven't recognized the node type then we'll throw an
      // error.
      default:
        throw new TypeError (node.type);
    }

    // If there is an `exit` method for this node type we'll call it with the
    // `node` and its `parent`.
    if (methods && methods.exit) {
      methods.exit (node, parent);
    }
  }

  // Finally we kickstart the traverser by calling `traverseNode` with our ast
  // with no `parent` because the top level of the AST doesn't have a parent.
  traverseNode (ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                                   转换器!!!
 * ============================================================================
 */

/**
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *         （抱歉，另一个太长了。）       |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// So we have our transformer function which will accept the lisp ast.
function transformer (ast) {
  // We'll create a `newAst` which like our previous AST will have a program
  // node.
  let newAst = {
    type: 'Program',
    body: [],
  };

  // Next I'm going to cheat a little and create a bit of a hack. We're going to
  // use a property named `context` on our parent nodes that we're going to push
  // nodes to their parent's `context`. Normally you would have a better
  // abstraction than this, but for our purposes this keeps things simple.
  //
  // Just take note that the context is a reference *from* the old ast *to* the
  // new ast.
  ast._context = newAst.body;

  // We'll start by calling the traverser function with our ast and a visitor.
  traverser (ast, {
    // The first visitor method accepts any `NumberLiteral`
    NumberLiteral: {
      // We'll visit them on enter.
      enter (node, parent) {
        // We'll create a new node also named `NumberLiteral` that we will push to
        // the parent context.
        parent._context.push ({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // Next we have `StringLiteral`
    StringLiteral: {
      enter (node, parent) {
        parent._context.push ({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // Next up, `CallExpression`.
    CallExpression: {
      enter (node, parent) {
        // We start creating a new node `CallExpression` with a nested
        // `Identifier`.
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // Next we're going to define a new context on the original
        // `CallExpression` node that will reference the `expression`'s arguments
        // so that we can push arguments.
        node._context = expression.arguments;

        // Then we're going to check if the parent node is a `CallExpression`.
        // If it is not...
        if (parent.type !== 'CallExpression') {
          // We're going to wrap our `CallExpression` node with an
          // `ExpressionStatement`. We do this because the top level
          // `CallExpression` in JavaScript are actually statements.
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
        // `context`.
        parent._context.push (expression);
      },
    },
  });

  // At the end of our transformer function we'll return the new ast that we
  // just created.
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                               代码生成器!!!!
 * ============================================================================
 */

/**
 * Now let's move onto our last phase: The Code Generator.
 *
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 */

function codeGenerator (node) {
  // We'll break things down by the `type` of the `node`.
  switch (node.type) {
    // If we have a `Program` node. We will map through each node in the `body`
    // and run them through the code generator and join them with a newline.
    case 'Program':
      return node.body.map (codeGenerator).join ('\n');
    // For `ExpressionStatement` we'll call the code generator on the nested
    // expression and we'll add a semicolon...
    case 'ExpressionStatement':
      return (
        codeGenerator (node.expression) + ';' // << (...because we like to code the *correct* way)
      );
    // For `CallExpression` we will print the `callee`, add an open
    // parenthesis, we'll map through each node in the `arguments` array and run
    // them through the code generator, joining them with a comma, and then
    // we'll add a closing parenthesis.
    case 'CallExpression':
      return (
        codeGenerator (node.callee) +
        '(' +
        node.arguments.map (codeGenerator).join (', ') +
        ')'
      );
    // For `Identifier` we'll just return the `node`'s name.
    case 'Identifier':
      return node.name;
    // For `NumberLiteral` we'll just return the `node`'s value.
    case 'NumberLiteral':
      return node.value;
    // For `StringLiteral` we'll add quotations around the `node`'s value.
    case 'StringLiteral':
      return '"' + node.value + '"';
    // And if we haven't recognized the node, we'll throw an error.
    default:
      throw new TypeError (node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                            !!!!!!!!编译器!!!!!!!!
 * ============================================================================
 */

/**
 * 结束了! 我们将创建我们的“编译器”函数。在这里，我们会把管道的每一个部分链接在一起。
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler (input) {
  let tokens = tokenizer (input);
  let ast = parser (tokens);
  let newAst = transformer (ast);
  let output = codeGenerator (newAst);

  // 简单的返回输出结果!
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!你做到了!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// 现在让我们将他们暴露出去...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
