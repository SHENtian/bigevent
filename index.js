//查版本号
// git --version

//git config --global user.name 'st'
//git config --global user.email '1324329809@qq.com'

//查看所有的全局配置项
// git config --list --global 

//查看单个配置项
//git config user.email
//git config user.name

//获取帮助信息
// git config -h(help)

//获取git仓库的两种方式
//1.需要将本地文件转化为仓库: git init  npm init -> package.json
    //在工程的跟目录  自动生成 .git 隐藏文件夹

//2.克隆(clone) git clone "xxx" 可以本身存在云端的仓库拉到本地

//U: 表示这个文件未被追踪 untracked
//A: 表示这个文件已经添加到追踪文件
//M:表示这个文件已经被更改了(modified)

//git status 用来查看当前文件状态
//精简的方式 git status -s(short) //查看当前文件状态

// 跟踪文件
//git add xxx.js(文件名称) / git add .  git add -A所有文件添加到追踪文件

//提交更新
// git commit -m 'XXXXx'

//撤销对文件的修改
//git checkout -- 文件名称

//取消暂存 git reset HEAD (文件名称)

//跳过添加暂存区
//git commit -a -m '描述信息'

//移除文件:
//本地仓库和本地工作区:git rm -f 文件名称 (危险)
//本地工作区 git rm --cached 文件名称

/**
 * 忽略文件:
 * 创建文件夹名称:.gitignore ---- /node_modules(表示忽略node_modules文件夹)
 * 
 * 查看历史记录
 * git log   ----q 退出(quit)
 * git log --oneline 一行显示
 * 
 * 
 * 回退到某个版本
 * git reset --hard xxxx
 * 
 * 
 * 
 * git init
 * git add/git add .
 * git status /git status -s
 * git commit -m '描述信息'
 * 
 * git commit -a -m '描述信息'
 * 有效的文件是:之前被添加到追踪文件,修改后的文件
 * 
 * git push -u origin master -f force  强制push
 * 
 * 
 * //后续的提交:git push
 * git status ->git add . ->git status ->git commit -m '描述信息' ->git push
 * 
 * 生成 ssh key 的命令:ssh-keygen -t rsa -b 4096 -C '1324329809@qq.com'
 * 
 * 检测 ssh key 是否配置成功的命令:ssh -T git@github.com
 * 
 * 克隆
 * git clone git@github.com:SHENtian/shentian_01.git
 * 
 * 分支  branch
 * master 分支 (合并分支)
 * 功能分支: 主要做某一块具体的业务功能
 * 查看分支列表:git branch *表示当前所在分支
 * 
 * 创建分支:git branch login(分支名称)
 * 特点:1.在master分支上,新建了个login分支,login分支的代码和master分支上一模一样
 *      2.不管建了多少个分支,此时仍在主分支上,不会进行切换
 * 
 * 切换分支:git checkout 分支名称
 * 
 * 先创建 ,同时并切换分支: git checkout -b 分支名称
 * 
 * 合并分支: master 分支合并 功能合并 (切换到master分支上, git merge 分支名称)
 *      
 * 删除分支:git branch -d 分支名称
 * 具体的冲突更改都是手动进行更改的: git merge
 * 
 * git branch;
 * 列出云端的分支列表:git remove show origin
 * 
 * 推送本地代码到云端
 * git push
 * 
 * 把远程分支上最新的代码下载到本地
 * git pull
 * 
 * git stash 把代码先缓存,先不提交 可以去切换分支 /git stash pop 把丢失的代码拉回来
 * 
 * 
 * git init  获取git仓库
 * git add .  所有文件添加到追踪文件
 * git status -s  查看当前文件状态
 * git commit -m '描述信息'  提交更新
 * 
 * git remote add origin http:xxxx  
 * git push -u origin master  
 * 
 * git branch
 * git checkout -b user(分支名称)
 * git push -u origin user
 * 
 * git stash/git stash pop   Aborting 拒绝切换分支
 * 
 */
