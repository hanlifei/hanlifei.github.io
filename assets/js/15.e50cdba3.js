(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{205:function(r,e,a){"use strict";a.r(e);var t=a(0),_=Object(t.a)({},function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("blockquote",[a("p",[r._v("本文原文来自网络, 此处只是摘要, 全文请移步")]),r._v(" "),a("p",[a("strong",[r._v("参考资料:")])]),r._v(" "),a("p",[a("a",{attrs:{href:"https://www.hollischuang.com/archives/943",target:"_blank",rel:"noopener noreferrer"}},[r._v("深入分析事务的隔离级别"),a("OutboundLink")],1),r._v("「Hollis」, 这篇文章中不止解释了事务的隔离级别, 其中还包含了事务相关的其他内容, 比如: "),a("a",{attrs:{href:"https://www.hollischuang.com/archives/898",target:"_blank",rel:"noopener noreferrer"}},[r._v("数据库事务"),a("OutboundLink")],1),r._v(", "),a("a",{attrs:{href:"https://www.hollischuang.com/archives/900",target:"_blank",rel:"noopener noreferrer"}},[r._v("数据库的读现象浅析"),a("OutboundLink")],1),r._v(", "),a("a",{attrs:{href:"https://www.hollischuang.com/archives/909",target:"_blank",rel:"noopener noreferrer"}},[r._v("数据库的锁机制"),a("OutboundLink")],1)]),r._v(" "),a("p",[a("a",{attrs:{href:"https://comedsh.iteye.com/blog/698733",target:"_blank",rel:"noopener noreferrer"}},[r._v("数据库事务隔离级别和锁实现机制"),a("OutboundLink")],1),r._v("「伤神」")]),r._v(" "),a("p",[a("a",{attrs:{href:"http://www.hollischuang.com/archives/tag/%E4%BA%8B%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"}},[r._v("事务相关的内容"),a("OutboundLink")],1),r._v("「Hollis」Hollis大神还很贴心的将他写的事务相关的文章进行了整理")]),r._v(" "),a("p",[a("a",{attrs:{href:"https://www.byteslounge.com/tutorials/spring-transaction-propagation-tutorial",target:"_blank",rel:"noopener noreferrer"}},[r._v("Spring事务传播行为"),a("OutboundLink")],1)])]),r._v(" "),a("h2",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务","aria-hidden":"true"}},[r._v("#")]),r._v(" 事务")]),r._v(" "),a("blockquote",[a("p",[r._v("事务(Transaction)，一般是指要做的或所做的事情。在计算机术语中是指访问并可能更新数据库中各种数据项的一个程序执行单元(unit)。在计算机术语中，事务通常就是指数据库事务。")])]),r._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[r._v("#")]),r._v(" 概念")]),r._v(" "),a("p",[r._v("一个数据库事务通常包含对数据库进行读或写的一个操作序列。它的存在包含有以下两个目的：")]),r._v(" "),a("blockquote",[a("p",[r._v("1、为数据库操作提供了一个从失败中恢复到正常状态的方法，同时提供了数据库即使在异常状态下仍能保持一致性的方法。\n2、当多个应用程序在并发访问数据库时，可以在这些应用程序之间提供一个隔离方法，以防止彼此的操作互相干扰。")])]),r._v(" "),a("h3",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[r._v("#")]),r._v(" 特性")]),r._v(" "),a("p",[r._v("并非任意的对数据库的操作序列都是数据库事务。事务应该具有4个属性：原子性、一致性、隔离性、持久性。这四个属性通常称为ACID特性。")]),r._v(" "),a("blockquote",[a("p",[a("strong",[r._v("原子性（Atomicity）")]),r._v("：事务作为一个整体被执行，包含在其中的对数据库的操作要么全部被执行，要么都不执行。\n"),a("strong",[r._v("一致性（Consistency）")]),r._v("：事务应确保数据库的状态从一个一致状态转变为另一个一致状态。一致状态的含义是数据库中的数据应满足完整性约束。\n"),a("strong",[r._v("隔离性（Isolation）")]),r._v("：多个事务并发执行时，一个事务的执行不应影响其他事务的执行。\n"),a("strong",[r._v("持久性（Durability）")]),r._v("：一个事务一旦提交，他对数据库的修改应该永久保存在数据库中。")])]),r._v(" "),a("h2",{attrs:{id:"隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别","aria-hidden":"true"}},[r._v("#")]),r._v(" 隔离级别")]),r._v(" "),a("p",[r._v("ANSI/ISO SQL定义的标准隔离级别有四种，从高到底依次为：可序列化(Serializable)、可重复读(Repeatable reads)、提交读(Read committed)、未提交读(Read uncommitted)")]),r._v(" "),a("h3",{attrs:{id:"未提交读-read-uncommitted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未提交读-read-uncommitted","aria-hidden":"true"}},[r._v("#")]),r._v(" 未提交读(Read uncommitted)")]),r._v(" "),a("p",[r._v("未提交读(READ UNCOMMITTED)是最低的隔离级别。通过名字我们就可以知道，在这种事务隔离级别下，一个事务可以读到另外一个事务未提交的数据。")]),r._v(" "),a("h3",{attrs:{id:"提交读-read-committed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交读-read-committed","aria-hidden":"true"}},[r._v("#")]),r._v(" 提交读(Read committed)")]),r._v(" "),a("p",[r._v("提交读(READ COMMITTED)也可以翻译成读已提交，通过名字也可以分析出，在一个事务修改数据过程中，如果事务还没提交，其他事务不能读该数据。")]),r._v(" "),a("h3",{attrs:{id:"可重复读-repeatable-reads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可重复读-repeatable-reads","aria-hidden":"true"}},[r._v("#")]),r._v(" 可重复读(Repeatable reads)")]),r._v(" "),a("p",[r._v("可重复读(REPEATABLE READS),由于提交读隔离级别会产生不可重复读的读现象。所以，比提交读更高一个级别的隔离级别就可以解决不可重复读的问题。这种隔离级别就叫可重复读（这名字起的是不是很任性！！）")]),r._v(" "),a("h3",{attrs:{id:"可序列化-serializable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可序列化-serializable","aria-hidden":"true"}},[r._v("#")]),r._v(" 可序列化(Serializable)")]),r._v(" "),a("p",[r._v("可序列化(Serializable)是最高的隔离级别，前面提到的所有的隔离级别都无法解决的幻读，在可序列化的隔离级别中可以解决。")]),r._v(" "),a("p",[r._v("我们说过，产生幻读的原因是事务一在进行范围查询的时候没有增加范围锁(range-locks：给SELECT 的查询中使用一个“WHERE”子句描述范围加锁），所以导致幻读。")]),r._v(" "),a("h2",{attrs:{id:"数据库的读现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库的读现象","aria-hidden":"true"}},[r._v("#")]),r._v(" 数据库的读现象")]),r._v(" "),a("h3",{attrs:{id:"脏读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脏读","aria-hidden":"true"}},[r._v("#")]),r._v(" 脏读")]),r._v(" "),a("p",[r._v("脏读又称无效数据的读出，是指在数据库访问中，事务T1将某一值修改，然后事务T2读取该值，此后T1因为某种原因撤销对该值的修改，这就导致了T2所读取到的数据是无效的。")]),r._v(" "),a("p",[r._v("脏读就是指当一个事务正在访问数据，并且对数据进行了修改，而这种修改还没有提交(commit)到数据库中，这时，另外一个事务也访问这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是脏数据，依据脏数据所做的操作可能是不正确的。")]),r._v(" "),a("h3",{attrs:{id:"不可重复读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读","aria-hidden":"true"}},[r._v("#")]),r._v(" 不可重复读")]),r._v(" "),a("p",[r._v("不可重复读，是指在数据库访问中，一个事务范围内两个相同的查询却返回了不同数据。这是由于查询时系统中其他事务修改的提交而引起的。比如事务T1读取某一数据，事务T2读取并修改了该数据，T1为了对读取值进行检验而再次读取该数据，便得到了不同的结果。")]),r._v(" "),a("p",[r._v("一种更易理解的说法是：在一个事务内，多次读同一个数据。在这个事务还没有结束时，另一个事务也访问该同一数据。那么，在第一个事务的两次读数据之间。由于第二个事务的修改，那么第一个事务读到的数据可能不一样，这样就发生了在一个事务内两次读到的数据是不一样的，因此称为不可重复读，即原始读取不可重复。")]),r._v(" "),a("h3",{attrs:{id:"幻读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#幻读","aria-hidden":"true"}},[r._v("#")]),r._v(" 幻读")]),r._v(" "),a("p",[r._v("幻读是指当事务不是独立执行时发生的一种现象，例如第一个事务对一个表中的数据进行了修改，比如这种修改涉及到表中的“全部数据行”。同时，第二个事务也修改这个表中的数据，这种修改是向表中插入“一行新数据”。那么，以后就会发生操作第一个事务的用户发现表中还有没有修改的数据行，就好象发生了幻觉一样.一般解决幻读的方法是增加范围锁RangeS，锁定检锁范围为只读，这样就避免了幻读。")]),r._v(" "),a("blockquote",[a("p",[r._v("幻读(phantom read)”是不可重复读(Non-repeatable reads)的一种特殊场景：当事务没有获取范围锁的情况下执行SELECT … WHERE操作可能会发生“幻影读(phantom read)”。")])]),r._v(" "),a("h2",{attrs:{id:"数据库锁机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库锁机制","aria-hidden":"true"}},[r._v("#")]),r._v(" 数据库锁机制")]),r._v(" "),a("h3",{attrs:{id:"概念-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念-2","aria-hidden":"true"}},[r._v("#")]),r._v(" 概念")]),r._v(" "),a("p",[r._v("当并发事务同时访问一个资源时，有可能导致数据不一致，因此需要一种机制来将数据访问顺序化，以保证数据库数据的一致性。锁就是其中的一种机制。")]),r._v(" "),a("p",[r._v("在计算机科学中，锁是在执行多线程时用于强行限制资源访问的同步机制，即用于在并发控制中保证对互斥要求的满足。")]),r._v(" "),a("h3",{attrs:{id:"锁的分类-oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁的分类-oracle","aria-hidden":"true"}},[r._v("#")]),r._v(" 锁的分类(oracle)")]),r._v(" "),a("p",[r._v("一、按操作划分，可分为"),a("code",[r._v("DML锁")]),r._v("、"),a("code",[r._v("DDL锁")])]),r._v(" "),a("p",[r._v("二、按锁的粒度划分，可分为"),a("a",{attrs:{href:"http://www.hollischuang.com/archives/914",target:"_blank",rel:"noopener noreferrer"}},[a("code",[r._v("表级锁")]),a("OutboundLink")],1),r._v("、"),a("a",{attrs:{href:"http://www.hollischuang.com/archives/914",target:"_blank",rel:"noopener noreferrer"}},[a("code",[r._v("行级锁")]),a("OutboundLink")],1),r._v("、"),a("a",{attrs:{href:"http://www.hollischuang.com/archives/914",target:"_blank",rel:"noopener noreferrer"}},[a("code",[r._v("页级锁")]),a("OutboundLink")],1),r._v("（mysql）")]),r._v(" "),a("p",[r._v("三、按锁级别划分，可分为"),a("a",{attrs:{href:"http://www.hollischuang.com/archives/923",target:"_blank",rel:"noopener noreferrer"}},[a("code",[r._v("共享锁")]),a("OutboundLink")],1),r._v("、"),a("a",{attrs:{href:"http://www.hollischuang.com/archives/923",target:"_blank",rel:"noopener noreferrer"}},[a("code",[r._v("排他锁")]),a("OutboundLink")],1)]),r._v(" "),a("p",[r._v("四、按加锁方式划分，可分为"),a("code",[r._v("自动锁")]),r._v("、"),a("code",[r._v("显示锁")])]),r._v(" "),a("p",[r._v("五、按使用方式划分，可分为"),a("a",{attrs:{href:"http://www.hollischuang.com/archives/934",target:"_blank",rel:"noopener noreferrer"}},[a("code",[r._v("乐观锁")]),a("OutboundLink")],1),r._v("、"),a("a",{attrs:{href:"http://www.hollischuang.com/archives/934",target:"_blank",rel:"noopener noreferrer"}},[a("code",[r._v("悲观锁")]),a("OutboundLink")],1)]),r._v(" "),a("p",[r._v("DML锁（data locks，数据锁），用于保护数据的完整性，其中包括行级锁(Row Locks (TX锁))、表级锁(table lock(TM锁))。 DDL锁（dictionary locks，数据字典锁），用于保护数据库对象的结构，如表、索引等的结构定义。其中包排他DDL锁（Exclusive DDL lock）、共享DDL锁（Share DDL lock）、可中断解析锁（Breakable parse locks）")]),r._v(" "),a("h2",{attrs:{id:"spring事务传播行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring事务传播行为","aria-hidden":"true"}},[r._v("#")]),r._v(" Spring事务传播行为")]),r._v(" "),a("p",[r._v("1、PROPAGATION_REQUIRED：如果当前没有事务，就创建一个新事务，如果当前存在事务，就加入该事务，该设置是最常用的设置。")]),r._v(" "),a("p",[r._v("2、PROPAGATION_SUPPORTS：支持当前事务，如果当前存在事务，就加入该事务，如果当前不存在事务，就以非事务执行。‘")]),r._v(" "),a("p",[r._v("3、PROPAGATION_MANDATORY：支持当前事务，如果当前存在事务，就加入该事务，如果当前不存在事务，就抛出异常。")]),r._v(" "),a("p",[r._v("4、PROPAGATION_REQUIRES_NEW：创建新事务，无论当前存不存在事务，都创建新事务。")]),r._v(" "),a("p",[r._v("5、PROPAGATION_NOT_SUPPORTED：以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。")]),r._v(" "),a("p",[r._v("6、PROPAGATION_NEVER：以非事务方式执行，如果当前存在事务，则抛出异常。")]),r._v(" "),a("p",[r._v("7、PROPAGATION_NESTED：如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与PROPAGATION_REQUIRED类似的操作。")])])},[],!1,null,null,null);e.default=_.exports}}]);