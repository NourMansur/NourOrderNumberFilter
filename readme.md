# Shopware 6 Order Number Filter Plugin

## Installation 

Put the contents of the archive inside custom/plugins
Run from shopware root directory in the terminal
```bash
bin/console plugin:refresh
bin/console plugin:install NourOrderNumberFilter --activate
bin/console cache:clear
./psh.phar administration:build
```

## Usage

Go to the administration panel, click on orders->overview to view all orders
Click on the funnel icon on the right side 
You will find the OrderNumber filter where you can search by the order's number